module.exports = async ({ github, context, jobName }) => {
  const envContext = JSON.parse(process.env.GITHUB_CONTEXT)
  const getStatusOfJob = async (jobName) => {
    const {
      data: { jobs },
    } = await github.rest.actions.listJobsForWorkflowRunAttempt({
      owner: context.repo.owner,
      repo: context.repo.repo,
      run_id: envContext.run_id,
      attempt_number: envContext.run_attempt,
    })
    const jobToWait = jobs.find((job) => job.name === jobName)
    return jobToWait.status
  }

  let jobStatus
  do {
  jobStatus = await getStatusOfJob(jobName)
    console.log('Waiting 5 seconds until ' + jobName + ' ends')
    await new Promise(res => setTimeout(res, 5000))
  } while (jobStatus === 'in_progress')

  if (jobStatus === 'failure') throw new Error('The job ' + jobName + ' have failed')
}
