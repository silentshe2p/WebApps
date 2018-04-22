val lines = sc.textFile("twitter.edges") 
// Map from following relationship to followed relationship
// followed1, follower1...
// followed1, follower2...
var followedBy = lines.flatMap(line => line.split("\n")).flatMap(relation => {
    var follow = relation.split(": ")
    val follower = follow(0)
    val followeds = follow(1).split(",")
    followeds.map(followed => (followed, follower))
})
// Reduce followed relationship by username
// followed1, follower1, follower2,... 
val uniqueFollowedBy = followedBy.reduceByKey((a,b) => a + "," + b)
// Map followed relationship to (followed, count) with count >= 1000
val followedCount = uniqueFollowedBy.map(relation => (relation._1, relation._2.split(",").size)).filter(relation => relation._2 >= 1000)

followedCount.saveAsTextFile("output")
System.exit(0)