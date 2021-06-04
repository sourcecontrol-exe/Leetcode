/**
 * Initialize your data structure here.
 */
var Twitter = function() {
    this.tweets = new Set();
    this.followers = new Set();
    this.count= 1;
};

/**
 * Compose a new tweet. 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    
    if(this.tweets[userId] == undefined){
        this.tweets[userId] = {};
        this.tweets[userId][tweetId] = this.count;
        if(!this.followers[userId]){
            this.followers[userId] = new Set;
        }
        this.followers[userId].add(userId)
    }
    else{
        this.tweets[userId][tweetId] = this.count;
    }
    this.count++;
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    let result = []
    let tweets = [];
    if(this.followers[userId]){
    [...this.followers[userId]].forEach(userId =>{
        if(this.tweets[userId] !== undefined)
        Object.entries(this.tweets[userId]).map(item =>{
            tweets.push([item[0],item[1]])
            console.log('hah')
        })
        
    });

    tweets.sort((a,b)=> b[1]-a[1]).map(ele=>{
        result.push(parseInt(ele[0],10))
    })

    }
    return result.length<=10? result: result.slice(0,10)
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if(!this.followers[followerId]){
        this.followers[followerId] = new Set();
    }
    this.followers[followerId].add(followeeId);
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    if(this.followers[followerId]){
        this.followers[followerId].delete(followeeId);
    }     
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */


var obj = new Twitter();

obj.postTweet(1,5);
obj.postTweet(1,3);
obj.postTweet(1,101);
obj.postTweet(1,13);
obj.postTweet(1,10);
obj.postTweet(1,2);
obj.postTweet(1,94);
obj.postTweet(1,505);
obj.postTweet(1,333);
obj.postTweet(1,22);
obj.postTweet(1,11);

console.log(obj.getNewsFeed(1))
