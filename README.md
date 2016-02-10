VisualStudio Code ｼﾓﾅｲｻﾞー

![VSS](https://raw.githubusercontent.com/sazae657/VS-Shimonizer/master/image.gif)

Shimonizeで選択範囲をｼﾓﾅｲｽﾞします

---

一部のｸｿﾌﾟﾗｯﾄﾌｫーﾑ では操作性がｸｿなのでｷーﾊﾞｲﾝﾃﾞｨﾝｸﾞ変更をｵｽｽﾒします


Code -> Preferences -> Keyboard Shortcuts -> keybindings.json
```
{"key": "cmd+,", "command": "extension.Shimonize", "when": "editorTextFocus"},
{"key": "cmd+w", "command": "extension.Shimonize", "when": "editorTextFocus"},
{"key": "cmd+b", "command": "extension.Shimonize", "when": "editorTextFocus"},
{"key": "cmd+r", "command": "extension.Shimonize", "when": "editorTextFocus"},
{"key": "cmd+]", "command": "extension.Shimonize", "when": "editorTextFocus"},
{"key": "cmd+[", "command": "extension.Shimonize", "when": "editorTextFocus"}
```
