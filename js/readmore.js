function read_more() {
    var readmore = $('.read_more');
    var comment = $('.review_comment p').text();
    
    //goes through each index of the array of 'review_comment p'
    $('.review_comment p').each(function(i){
      //calculates height of comment variable
      var commentheight = $(this).height();
      //calculates scroll height of comment on each div
      var scrollcommentheight =  $('.review_comment p')[i].scrollHeight;
      console.log("This is the comment height" + ' - ' + commentheight);
      console.log("This is the scroll height" + ' - ' + scrollcommentheight);
    //if comment height is same as scroll height then hide read more button
      if (commentheight == scrollcommentheight){
        $(this).siblings(readmore).hide();
      }
    //otherwise read more button shows
      else {
        $(this).siblings(readmore).text("Read More");
      }
    });
    
    
      readmore.on('click', function() {
        var $this = $(this);
        event.preventDefault();
        
        $this.siblings('.review_comment p').toggleClass('active');
    
        if ($this.siblings('.review_comment p').text().length < 230) {
          $this.text("Read More");
        }
        if ($('.review_comment p').hasClass('active')) {
          $this.text("Read Less");
        } else {
          $this.text("Read More");
        }
      });
    };
    
    $(function() {
      //Calling function after Page Load
      read_more();
    });
    