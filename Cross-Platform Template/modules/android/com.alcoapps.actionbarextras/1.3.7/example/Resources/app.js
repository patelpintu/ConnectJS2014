var abx = require('com.alcoapps.actionbarextras'),
    opts = {
        shareAction: false,
        titleFont: false,
        subtitleFont: false,
        disableIcon: false,
        dropdown: false
    };

var win = Titanium.UI.createWindow({
    backgroundColor:'#fff',
    layout: 'vertical'
});

win.addEventListener('open',function(e){
    
    // set initial values
    abx.title = "ActionbarExtras";
    abx.titleFont = "Aller.ttf";
    abx.subtitle = "for some extra action";
    abx.subtitleFont = "Aller.ttf";
    
        
    var activity = win.getActivity();
    
    if(activity){

        activity.onCreateOptionsMenu = function(e){
            
            if (opts.shareAction){
                // This is how you add a basic Share Action to your ActionBar
                // this should be done within the onCreateOptionsMenu
                // because we need to pass a reference to the menu
                
                // at first, create a basic share intent
                var intent = Ti.Android.createIntent({
                   action: Ti.Android.ACTION_SEND,
                   type: 'text/plain'
                });
                intent.putExtra(Ti.Android.EXTRA_TEXT, 'Hello world!');
    
                // now pass over the menu and the intent like this
                abx.addShareAction({
                    menu: e.menu,
                    intent: intent,
                    showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS, // optional - default: SHOW_AS_ACTION_IF_ROOM
                    title: "Share Hello World" // optional - default: "Share"
                });
            }
        };
    }
});

// TITLEFONT
var btn_titleFont = Ti.UI.createButton({ title: 'Title Font' });
btn_titleFont.addEventListener('click', function(){
    abx.setTitleFont(opts.titleFont ? "Aller.ttf" : "Chunkfive.otf");
    opts.titleFont = !opts.titleFont;
});
win.add(btn_titleFont);

// SUBTITLEFONT
var btn_subtitleFont = Ti.UI.createButton({ title: 'Subtitle Font' });
btn_subtitleFont.addEventListener('click', function(){
    abx.setSubtitleFont(opts.subtitleFont ? "Aller.ttf" : "Chunkfive.otf");
    opts.subtitleFont = !opts.subtitleFont;
});
win.add(btn_subtitleFont);

// TITLECOLOR
var btn_titleColor = Ti.UI.createButton({ title: 'Title Color' });
btn_titleColor.addEventListener('click', function(){
    abx.setTitleColor('#'+Math.floor(Math.random()*16777215).toString(16));
});
win.add(btn_titleColor);

// SUBTITLECOLOR
var btn_subtitleColor = Ti.UI.createButton({ title: 'Subtitle Color' });
btn_subtitleColor.addEventListener('click', function(){
    abx.setSubtitleColor('#'+Math.floor(Math.random()*16777215).toString(16));
});
win.add(btn_subtitleColor);

// BACKGROUND COLOR
var btn_backgroundColor = Ti.UI.createButton({ title: 'Background Color' });
btn_backgroundColor.addEventListener('click', function(){
    abx.setBackgroundColor('#'+Math.floor(Math.random()*16777215).toString(16));
});
win.add(btn_backgroundColor);

// DISABLE ICON
var btn_disableIcon = Ti.UI.createButton({ title: 'Disable Icon' });
btn_disableIcon.addEventListener('click', function(){
    opts.disableIcon = !opts.disableIcon;
    abx.setDisableIcon( opts.disableIcon );
});
win.add(btn_disableIcon);

// SHARING ACTION
var btn_sharingAction = Ti.UI.createButton({ title: 'Sharing Action' });
btn_sharingAction.addEventListener('click', function(){
    opts.shareAction = !opts.shareAction;
    win.activity.invalidateOptionsMenu();
});
win.add(btn_sharingAction);

// DROPDOWN
var dropdown;
var btn_dropdown = Ti.UI.createButton({ title: 'Dropdown' });
btn_dropdown.addEventListener('click', function(){
    opts.dropdown = !opts.dropdown;
    
    if (opts.dropdown){
        dropdown = abx.createDropdown({
            titles: ["First", "Second", "Third"]
        });
        
        dropdown.addEventListener('change', function(e){
            Ti.API.info("dropdown changed to: " + e.index);
        });
    }else{
        dropdown.remove();
    }
    
});
win.add(btn_dropdown);

win.open();
