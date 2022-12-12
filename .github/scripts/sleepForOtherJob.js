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

  let jobStatus = await getStatusOfJob(jobName)
  console.log(jobStatus)
}
