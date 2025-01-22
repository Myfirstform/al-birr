if (screen.orientation) {
    screen.orientation.lock('portrait-primary').then(function() {
        console.log('Orientation locked to portrait-primary');
    }).catch(function(error) {
        console.error('Failed to lock orientation: ' + error.message);
    });
}