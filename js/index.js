$(function() { // Shorthand for checking if page is ready to work with JS code. $(document).ready() does the same, gives vairables function-level scope

    /*    
    
    // 1. jQuery Methods & Properties
    $(':header').addClass('headline'); // Selects all <h1> thru <h6> and adds headline class 
    $('li:lt(3)').hide().fadeIn(1500); // Selects first 3 <li> and hide them followed by fading them into.
    $('li').on('click', function() { // Sets click event listener on all <li>
        $(this).remove();// Removes element clicked on
    })
    
    $('li em').addClass('seasonal'); // Adds seasonal class to <li><em>
    $('li.hot').addClass('favorite'); // Adds favorite class to all <li class='hot'>
    
    Following check that page is ready for your code to work with
    $(document).ready(function() {
    Your script goes here
    });
    
    $('li[id!="one"]').hide().delay(500).fadeIn(1400); // Chaining methods with jQuery
    Hide elements, creates delay, and fade them back in
    Could use more readable syntax{
        $('li[id!="one"]')
            .hide()
            .delay(500)
            .fadeIn(1400);
    }
    Each line starts with dot notationn & smeicolon indicates where done working with selection
    
    // 2. Getting at Content
    var $listHTML = $('ul').html(); // Returns all <li>, HTML inside <ul>
    $('ul').append($listHTML); // Appends selection to end of matched set, adding content
    
    var $listText = $('ul').text(); // Results in the following selection:
    /*
    Fresh Figs
    Pine Nuts
    Honey
    Balsamic Vinegar
    Quinoa
    
    $('ul').append('<p>' + $listText + '</p>'); // Appends to then of selection, after exisiting <ul> in <p>
    
    var $listItemHTML = $('li').html(); // Selects elements in first <li>; <em>
    $('li').append('<i> ' + $listItemHTML + '</i>'); // Appends selection to every <li> in italic
    
    var $listItemText = $('li').text(); // Selects text from all <li>, slection result"
    // Fresh FigsPine NutsHoneyBalsamic VinegarQuinoa, notice th space between wrods but no between individual list items
    $('li').append('<i> ' + $listItemText + '</i>'); // Appends selection to all <li> in italic
    
    // 3. Changing Content
    $(function() {
        $('li:contains("Pine")').text('Almonds'); // Changes text in <li> with Pine Nuts text to Almonds
        $('li.hot').html(function(){  // Selects every <li class="hot">
            return '<em>' + $(this).text() + '</em>'; // Places all text in <li class="hot"> in <em> tags 
        });
        $('li#one').remove(); // Removes <li id="one">
    })
    
    // 4. Adding New Content
    $(function(){
        $('ul').before('<p class="notice">Just Updated</p>'); // Adds <p> before <ul> selection
        $('li.hot').prepend('+ '); // Adds '+ ' text to beginning of <li class="hot"> text; after opening <li>
        var $newListItem = $('<li><em>Glute-free</em> Soy Sauce</li>'); // Creates jQuery object containing new content
        $('li:last').after($newListItem); // Add jQuery object after last <li> in selection
    });
    
    // 5. Working With Attributes
    $(function() {
        $('li#three').removeClass('hot'); // Removes 'hot' class from <li id="'three">
        $('li.hot').addClass('favorite'); // Adds class of 'favorite' to <li class="hot">
        $('ul').attr('id', 'group'); // Gets and sets id attribute of first <ul> and adds 'group'
    });
    
    // 6. Changing CSS Rules, better to change class attribute to trigger new CSS than change properties within JS
    $(function(){
        var backgroundColor = $('li').css('background-color'); // jQuery object containing CSS of first <li>
        $('ul').append('<p>Color was: ' + backgroundColor + '</p>'); // Adds <p> after </ul> indicating previous <li> background color
        $('li').css({ // Changes CSS of <li> in object literal notation 
            'background-color': '#C5A996',
            'border': '1px solid #FFF',
            'color': '#000',
            'font-family': 'Georgia',
            'padding-left': '+=75'
        });
    });
    
    // 7. Using .each()
    $(function(){
        $('li').each(function(){ // Selects all <li> and uses each() to apply following statements to all elements
            var ids = this.id; // Accesses current elements id attribute
            $(this).append(' <span class="order">' + ids + '</span>'); // Adds <span> element to all <li> containing id attribute value as text
        });
    });
    
    // 8. Events
    $(function(){
        var ids = ''; // Delclares variable with blank string
        var $listItems = $('li'); // Selects all <li>
    
        // Declares mouse over and click event
        $listItems.on('mouseover click', function() { // Note how teo events are specified within same quotations
            ids= this.id; // Stores value of current <li> from selection
            $listItems.children('span').remove(); // Removes any <span> if any from all <li>
            $(this).append('<span class="priority"> ' + ids + '</span>'); // Adds <span> containing id value to enter of text to current <li>
        });
    
        // Declares mouse out event
        $listItems.on('mouseout', function(){
            $(this).children('span').remove; // Removes <span> elements to prevent build-up of added elements 
        });
    });
    
    // 9. Event Object (May not work in Firefox)
    $(function(){ // Declares funciton
        $('li').on('click', function(e){ // Declares click event with event object
            $('li span').remove(); // Removes <span> from all <li>, prvents element build-up
            var date = new Date(); // New date object storing current date
            date.setTime(e.timeStamp); // Time event was triggered
            var clicked = date.toDateString(); // Converts date to string that can be read
            $(this).append('<span class="date"> ' + clicked + ' ' + e.type + '</span>') // Adds <span> with text indicating when it was clicked.
        });
    });
    
    // 10. Delegating Events
    $(function(){
        var listItem, itemStatus, eventType; // Declares variables
    
        $('ul').on( 
            'click mouseover', // click & mouseover events
            ':not(#four)', // Selector filters out <li id='four'>
            {status: 'important'}, // Additional info passed by event handler
    
            function(e){ // Creates text content containing Item Name, Status and event triggered on it
                listItem = 'Item: ' + e.target.textContent + '<br/>';
                itemStatus = 'Status: ' + e.data.status + '<br/>';
                eventType = 'Event: ' + e.type;
                $('#notes').html(listItem + itemStatus + eventType); // Message place in <p id='notes'>
            }
        );
    });
    
    // 11. Basic Effects
    $(function(){
        $('h2').hide().slideDown(); // Hides <h2> then slides down content to reveal
        var $li = $('li'); // Selects all <li>
        $li.hide().each(function(index){ // Hides all <li> and loops a function for each <li>
            $(this).delay(700 * index).fadeIn(700); // Fades back in <li> delay based on index number in selection
        });
    
        $li.on('click', function(){ // Creates click event for <li>
            $(this).fadeOut(700); // Fades out <li> in 700 ms
        });
    });
    
    // 12. Using animation
    $(function(){
        $('li').on('click', function(){ // Selects all <li> and adds click event
            $(this).animate({ // Creates animation for <li> clicked on
                opacity: 0.0,
                paddingLeft: '+80',   
            }, 500 // Animation takes 500 ms
            , function(){ // Callback function when animation done
                $(this).remove(); // Removes element clicked on
            });
        });
    });
    
    // 13. Traversing
    $(function(){
        var $h2 = $('h2'); // Selects <h2>
        $('ul').hide(); // Hides <ul>
        $h2.append('<a> Show</a>'); // Appends <a> to <h2>
    
        $h2.on('click', function(){ // Click event for <h2>
            $h2.next() // Creatres animation for <h2> next sibling <ul>
                .fadeIn(500) // Fades in <ul> at 500ms
                .children('.hot') // Selects children elements with 'hot' class <li>
                .addClass('cool'); // Adds class to <li> selection
            $h2.find('a').fadeOut(); // Fades out previously added <a> within >h2> in selection
        })
    })
    
    // 14. Filters in Use
    var $listItems =  $('li'); // Selects all <li>
    $listItems.filter('.hot:last').removeClass('hot'); // Filters last <li> with class 'hot', then removes class 'hot'
    // Following adds class 'cool' to any <li> without 'hot' class 
    $('li:not(.hot)').addClass('cool'); // Same as $('li').not('.hot').addClass('cool');
    $('li:has(em)').addClass('neutral'); // Adds class to <li> contaiin 'em'
    
    $listItems.each(function(){ // Loop for all <li>
        var $this = $(this); // Caches current element in jQuery object
        if ($this.is('.hot')){ // If <li> has class 'hot', is() used to check condition and return boolean
            $this.prepend('Priority Item: '); // Adds texts prior to content in <li>
        }
    });
    
    $('li:contains("Honey")').append(' (local)'); // Append text to content in <li> with specified text
    
    // Using Index Numbers
    $(function(){
        $('li:lt(2)').removeClass('hot'); // Element with index number < 2, removes class
        $('li').eq(0).addClass('neutral'); // Element that matches index number 0, adds class
        $('li:gt(2)').addClass('cool'); // Elements with index number > 2, adds class
    })
    
    // 15. Working With Forms
    $(function(){
    
        // Inital jQuery objects
        var $newItemButton = $('#newItemButton'); // Selects element with 'newItemButton' id
        var $newItemForm = $('#newItemForm'); // Selects elements with 'newItemForm' id
        var $textInput = $('input:text'); // Selects input text
    
        $newItemButton.show(); // Shows button
        $newItemForm.hide(); // Hides form
    
        $('#showForm').on('click', function(){ // Adds event listener to new item button
            $newItemButton.hide(); // Hides button
            $newItemForm.fadeIn(700); // Shows forms, fades in 700 ms
        });
    
        $newItemForm.on('submit', function(e){ // On submit event listener for new item form
            e.preventDefault(); // Prevents default going to another page, stops form from submitting
            var newText = $('input:text').val(); // Variable containing input text
            $('li:last').after('<li>' + newText + '</li>'); // Adds new <li> after last <li>
            $newItemForm.hide(); // Hides form
            $newItemButton.show(); // Shows Button
            $textInput.val(''); // Clears out input box
        });
    
    });
    
    // 16. Cut, Copy & Paste
    $(function(){
        var $p = $('p'); // jQuery object storing <p>
        var $cloneQuote = $p.clone(); // Clones and stores <p>
        $p.remove(); // Removes old <p>
        $cloneQuote.insertAfter('h2'); // Inserts cloned <p> after <h2>
    
        var $moveItem = $('#one').detach(); // Detaches <li id='one'>
        $moveItem.appendTo('ul'); // Appends selection to end of <ul>
    })
    
    // 17. Changing Dimensions
    $(function(){
        var listHeight = $('#page').height(); // Store height of <div id='page'> container
        $('ul').append('<p>Height: ' + listHeight + 'px</p>'); // Appends <p> with height info to end of <ul>
        $('li').width('50%'); // <li> width 50%
        $('li#one').width(125); // <li id='one'> width 125 px
        $('li#two').width('75%'); // <li id='two'> width 75%
    });
    
    
    
    // 18.  Determining Item Position,m user scroll within 500 px of footer and ad slides into view when scroll bar present, minmize window 
    $(function(){
        var $window = $(window); // jQuery object, stores window object
        var $slideAd = $('#slideAd'); // Stores slideAd 
        // Height of endzone calculated
        var endZone = $('#footer').offset().top - $window.innerHeight() - 500; 
        
        $window.on('scroll', function(){ // Scroll event listener for window object
    
            if( (endZone) < $window.scrollTop()){ // Checks if user's position is further from top of page than start of endzone
                $slideAd.animate({ 'right': '0px'}, 250) // // If true, ad slides into view from the rtght in 250 ms
            } else { // If false or box is in the middel animating:
                $slideAd.stop(true).animate({ 'right': '-360px'}, 250); // Animation is stopped, slide off to the right in 250 ms off page 
            }
        });
    });
    */
    
    });
© 2021 GitHub, Inc.
