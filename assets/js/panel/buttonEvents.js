/**
 * @file buttonEvents.js
 * @author Sanjay Sunil 
 * @license GPL-3.0
 */

refreshToken.click(() => {
	if (window.confirm(localeFile.token.confirmation)) {
		localStorage.setItem("token", "");
		localStorage.setItem("isLoggedIn", "0");
		location.replace("login.html");
	}
});

send.click(() => {
	sendMessage();
});

clearChat.click(() => {
	localStorage.setItem("lastMessages", "");
	$("#lastMessages").empty();
});

leaveGuild.click(() => {
	if (guilds.val() !== "DM") {
		if (window.confirm(localeFile.token.confirmation)) {
			client.guilds.cache
				.find((guild) => guild.id === guilds.val())
				.leave()
				.catch(() => {
					tempChange("#leaveGuild", `[${localeFile.errors.error}]`, 1000);
				});
		}
	}
});

refreshChat.click(() => {
	updateChannel();
});
