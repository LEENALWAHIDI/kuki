basic.forever(function () {
    led.toggle(0, 0)
	
    loops.everyInterval(500, function() {
        
    })
})
music.play(music.tonePlayable(Note.C, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)