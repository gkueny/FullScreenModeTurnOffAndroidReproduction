## Reproduction

Reproduction of issue https://github.com/react-native-video/react-native-video/issues/3552

> I have reproduced with:
>
> - samsung S7 (Android 8)
>
> I can not reproduce with
>
> - Samsung A64 (Android 13)
> - Samsung S21 (Android 14)

- Set set sleep mode of your real phone to 15s
- Run the app on the real phone
- stop the video
- go to fullscreen
- run the video

Phone should go to sleep mode before the video end.

Phone do not go to sleep mode if:

- video run, but not in fullscreen
