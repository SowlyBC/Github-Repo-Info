//-- Variables

const { Octokit } = require('octokit');

//--

//-- Classes

class GitHub {
  constructor() {
    this.user_key = process.env.USER_KEY;
  }

  async get_data() {
    const octokit = new Octokit({
      auth: this.user_key
    });

    const repos = await octokit.request('GET /repos/{owner}/{repo}/commits', {
      owner: '[NAME]',
      repo: '[REPO]'
    });

    for (let i = 0; i < repos.data.length; i++) {
      console.log(repos.data[i].commit.message);
    }
  }
}

//--

module.exports = { GitHub };