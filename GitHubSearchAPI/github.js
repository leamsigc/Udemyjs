class GitHub {
    constructor() {
        this.client_id = '29dcaed8279d14a3b363';
        this.client_secret = '36e26214c17e14f8a88769e2000612a6e573170b';
        this.repoCounter = 10;
        this.repoSort = 'updated: asc'
    }

    async get(user) {
        const profileResponse = await fetch(` https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profileData = await profileResponse.json();

        const repoResponse = await fetch(` https://api.github.com/users/${user}/repos?per_page=${this.repoCounter}&sort=${this.repoSort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoData = await repoResponse.json();

        return {
            profileData,
            repoData
        };
    }
}