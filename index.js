$('#submit-button').on('click', function(event) {
    event.preventDefault();
    let displayValue = $('#Display').val();
    let commentsValue = $('#Comments').val();
    let profileimage = $('Image').val();
    $('#container').prepend(`
    <div class='userComments'>
    <div class="image"></div>
    <div class="parentDiv">
    <div class="usercoms">
        <p>${displayValue}</p> 
        <h1>${commentsValue}</h1>
    </div>
        <div class="delete">
            <button class="delete-button">Delete</button> 
            <button class="edit">Edit</button>
        </div>
        </div>
        <div class="displayNone">
        <textarea class="status" name="status" id="Comment" placeholder="Edit Comment" rows="4" cols="50"></textarea> 
            <input type="submit" class="submit2" value="Submit">
            </div>
    </div>
    `);
});
$('#container').on('click', '.edit', function(event) {
    event.preventDefault();
    let parents = $(this).parents()[2];
    let child = $(parents).children()[2];
    $(child).toggleClass('displayNone')
});
$('#container').on('click', '.submit2', function(event) {
    event.preventDefault();
    let parents = $(this).parents()[1];
    let children = $(parents).children()[1];
    let child = $(children).children()[0];
    let child1 = $(child).children()[1];
    $(child1).text($(this).prev().val());
    let child2 = $(this).parents()[0];
    $(child2).toggleClass('displayNone');
});
$('#container').on('click', '.delete-button', function(event) {
    event.preventDefault();
    let parents = $(this).parents()[2];
    $(parents).remove();
    console.log(parents)
});