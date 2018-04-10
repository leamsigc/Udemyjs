console.clear();
const request = new GitHub;
const profile = new UI;

const searchUser = document.querySelector('#searchUser-js');
searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;

    if (!userText || userText === ' ') {
        //clear ui 
        profile.clearUi();
        return false;
    }

    request.get(userText)
        .then(data => {
            if (data.profileData.message === 'Not Found') {
                profile.showAlert('Profile not Found', 'alert alert-danger');
            } else {
                profile.showProfile(data.profileData);
                profile.showRepos(data.repoData);
            }
        });
});