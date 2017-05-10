class Author {
    constructor() {
        this.avatar = null;
        this.bannerImage = null;
        this.createdDate = null;
        this.description = null;
        this.favoritesCount = 0;
        this.followersCount = 0;
        this.friendsCount = 0;
        this.userName = null;
        this.userScreenName = null;
    }

    getAvatar() {
        return this.avatar;
    }

    getBannerImage() {
        return this.bannerImage;
    }

    getDescription() {
        return this.description;
    }

    getFavoritesCount() {
        return this.favoritesCount;
    }

    getFollowersCount() {
        return this.followersCount;
    }

    getFriendsCount() {
        return this.friendsCount;
    }

    getName() {
        return this.userName;
    }

    getProfileUrl() {
        return 'https://twitter.com/'+ this.userName;
    }

    getScreenName() {
        return this.userScreenName;
    }

    setAvatar(value) {
        this.avatar = value;
    }

    setDescription(value) {
        this.description = value;
    }

    setBannerImage(value) {
        this.bannerImage = value;
    }

    setCreatedDate(value) {
        this.createdDate = value;
    }

    setFavoritesCount(value) {
        this.favoritesCount = value;
    }

    setFollowersCount(value) {
        this.followersCount = value;
    }

    setFriendsCount(value) {
        this.friendsCount = value;
    }

    setUserName(value) {
        this.userName = value;
    }

    setUserScreenName(value) {
        this.userScreenName = value;
    }
}

module.exports = Author;