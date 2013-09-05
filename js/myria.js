/*
 * An eceedingly simple function that computes the current time
 * in myriaseconds: that is, the number of seconds passed -
 * expressed metrically.
 *
 * Inspired by: http://blog.yef.im/post/55681508772/metric-time
 */
 
var myriaseconds = {
  now:function() {
    var myria_dat = new Date();

    // Convert hours and minutes into seconds
    var myria_hrs = parseInt(myria_dat.getHours() * Math.pow(60, 2), 10);
    var myria_mns = parseInt(myria_dat.getMinutes() * 60, 10);

    // Then total the number of seconds passed and divide by 10000
    var myria_now = parseFloat((myria_hrs + myria_mns + myria_dat.getSeconds()) / 10000);
    return          myria_now.toFixed(4);
  }
}