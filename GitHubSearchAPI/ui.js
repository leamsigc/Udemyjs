class UI {
    constructor() {
        this.profile = document.querySelector("#user-profile-js");
    }

    showProfile(user) {
        this.profile.innerHTML = `
    <div class="card text-white mb-3">
        <div class='row'>
            <div class='col-md-3'>
                <img class='img-fluid m-2' src='${user.avatar_url}'/>
                <a class='btn btn-primary btn-block m-2' target='_blanc' href='${
                  user.html_url
                }'>View Profile</a>
            </div>
            <div class='col-md-9'>
                <div class="card-header text-center mt-3">
                    <h1>${user.name}</h1>
                </div>
                <div class="card-body">
                    <h4 class="card-title">${user.login}</h4>
                    <span class='badge badge-secondary' >Followers: ${
                user.followers
                }</span>
                    <span class='badge badge-success' >Fallowing: ${
                user.following
                }</span>
                    <span class='badge badge-info' >Gist: ${user.public_gists}</span>
                    <span class='badge badge-light' >Public Repos: ${
                user.public_repos
                }</span>
                    <br><br>
                    <ul class='list-group'>
                        <li class='list-group-item'>Company : ${user.company}</li>
                        <li class='list-group-item'>User Website : <a href='${
                        user.blog
                        }' target='_blanc' class='btn btn-light'>${user.blog}</a></li>
                        <li class='list-group-item'>Location : ${user.location}</li>
                        <li class='list-group-item'>Member Since : ${
                        user.created_at
                        }</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div id='repo'></div>`;
    }

    showRepos(repos) {
        let output = repos.map((repo => {
            return `
        <div class='card card-body mb-2'>
            <div class='row'>
                <div class='col-md-6'>
                    <a href='${repo.html_url}' target='_blanc'>${repo.name}</a>
                </div>
                <div class='col-md-6'>
                    <span class='badge badge-secondary' >Starts : ${repo.stargazers_count}</span>
                    <span class='badge badge-secondary' >Watchers : ${repo.watchers_count}</span>
                    <span class='badge badge-secondary' >Forks : ${repo.forks_count}</span>
                </div>
            </div>
        </div>`;
        }));
        document.querySelector('#repo').innerHTML = output.join('');
    }
    showAlert(message, classes) {
        this.clearAlert();
        const div = document.createElement("div");
        div.className = classes;
        div.appendChild(document.createTextNode(message));

        const parent = document.querySelector(".searchContainer");
        const beforeForm = document.querySelector(".search");

        parent.insertBefore(div, beforeForm);
    }
    clearAlert() {
        const currentAlert = document.querySelector(".alert");
        if (currentAlert) {
            currentAlert.remove();
        } else {
            setTimeout(() => {
                document.querySelector(".alert").remove();
            }, 2000);
        }
    }
    clearUi() {
        this.profile.innerHTML = "";
    }
}