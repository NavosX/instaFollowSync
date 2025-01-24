const followersData = require("./followers_1.json");
const followingData = require("./following.json").relationships_following;

const followers = listURLs(followersData);
const following = listURLs(followingData);

function listURLs(data) {
    var dataURLs = [];

    data.forEach((user) => {
        dataURLs.push(user.string_list_data[0].href);
    });

    return dataURLs;
};

const filteredData = followers.filter(URL => !following.includes(URL));

console.log(filteredData);
