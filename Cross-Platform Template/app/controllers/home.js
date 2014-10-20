/*
Even though your Views are platform-specific, you can still keep your controllers cross-platform.
This controller will be used for your home View regardless of the platform, so you'll have to 
manually check in case you need to perform platform-specific operations
*/

var args = arguments[0] || {};

if (OS_IOS){
	$.sharedhome.greeting.text = "Hello from iOS";
}else if (OS_ANDROID){
	$.sharedhome.greeting.text = "Hello from Android"
}
