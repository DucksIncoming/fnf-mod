var msFromNote = (beat, bpm) => beat*6e4/bpm;
var addSection = 
window.song = {
	song: {
		bpm: undefined,
		needsVoices: !0,
		notes: [],
		player1: "bf",
		player2: "dad",
		sectionLengths: [],
		sections: 0,
		song: undefined,
		speed: 1,
	}
}
var setBpm = (e) => {window.song.song.bpm = e;}
var setSpeed = (e) => {window.song.song.speed = e;}
var setSong = (e) => {window.song.song.song = e;}
var clearSection = () => {
	window.section = {
		altAnim: false,
		bpm: window.song.song.bpm,
		changeBPM: false,
		lengthInSteps: 0,
		mustHitSection: true,
		typeOfSection: 0,
		sectionNotes: [],
	}
}
window.globalTimeStep = 0;
var resetTime = () => {window.globalTimeStep = 0;}
var addNote = (beatsFromLastNote, type, lengthInBeats) => {
	window.globalTimeStep += msFromNote(beatsFromLastNote, window.song.song.bpm);
	window.section.sectionNotes.push([window.globalTimeStep, type, msFromNote(lengthInBeats, window.song.song.bpm)]);
}
var exportSection = () => {
	window.song.song.notes.push(window.section);
	clearSection();
}
a = 0;
s = 1;
w = 2;
d = 3;
dad = 4;