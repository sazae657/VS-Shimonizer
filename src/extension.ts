import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
    var ﾅｲｻﾞー = new ｼﾓﾅｲｻﾞー();
    var ｼﾓﾅｲｽﾞｴﾃﾞｨﾀー = vscode.commands.registerTextEditorCommand(
                'extension.Shimonize',
                (ｴﾃﾞｨﾀー, ｴﾃﾞｨｯﾄ) =>
                {
                    if(ｴﾃﾞｨﾀー.selection.isEmpty) {
                        vscode.window.showInformationMessage("（ ◜◡◝ ）");
                        return;
                    }
                    var ｼﾓﾅｲｽﾞﾃｷｽﾄ = ｴﾃﾞｨﾀー.document.getText(ｴﾃﾞｨﾀー.selection);
                    ｴﾃﾞｨｯﾄ.replace(ｴﾃﾞｨﾀー.selection, ﾅｲｻﾞー.ｼﾓﾅｲｽﾞ(ｼﾓﾅｲｽﾞﾃｷｽﾄ));
                });

    context.subscriptions.push(ｼﾓﾅｲｽﾞｴﾃﾞｨﾀー);
    var pascalize = vscode.commands.registerTextEditorCommand(
                'extension.Pascalize',
                (ｴﾃﾞｨﾀー, ｴﾃﾞｨｯﾄ) =>
                {
                    if(ｴﾃﾞｨﾀー.selection.isEmpty) {
                        vscode.window.showInformationMessage("（ ◜◡◝ ）");
                        return;
                    }
                    var ｼﾓﾅｲｽﾞﾃｷｽﾄ = ｴﾃﾞｨﾀー.document.getText(ｴﾃﾞｨﾀー.selection);
                    ｴﾃﾞｨｯﾄ.replace(ｴﾃﾞｨﾀー.selection, ﾅｲｻﾞー.ﾊﾟｽｶﾗｲｽﾞ(ｼﾓﾅｲｽﾞﾃｷｽﾄ));
                });    
    context.subscriptions.push(pascalize);                
}

export function deactivate() {
}

class ｼﾓﾅｲｻﾞー {
    ｼﾓﾅｲｽﾞﾃーﾌﾞﾙ = {
        "ガ": "ｶﾞ", "ギ": "ｷﾞ", "グ": "ｸﾞ", "ゲ": "ｹﾞ", "ゴ": "ｺﾞ",
        "ザ": "ｻﾞ", "ジ": "ｼﾞ", "ズ": "ｽﾞ", "ゼ": "ｾﾞ", "ゾ": "ｿﾞ",
        "ダ": "ﾀﾞ", "ヂ": "ﾁﾞ", "ヅ": "ﾂﾞ", "デ": "ﾃﾞ", "ド": "ﾄﾞ",
        "バ": "ﾊﾞ", "ビ": "ﾋﾞ", "ブ": "ﾌﾞ", "ベ": "ﾍﾞ", "ボ": "ﾎﾞ",
        "パ": "ﾊﾟ", "ピ": "ﾋﾟ", "プ": "ﾌﾟ", "ペ": "ﾍﾟ", "ポ": "ﾎﾟ",
        "ヴ": "ｳﾞ",
        "ア": "ｱ", "イ": "ｲ", "ウ": "ｳ", "エ": "ｴ", "オ": "ｵ",
        "カ": "ｶ", "キ": "ｷ", "ク": "ｸ", "ケ": "ｹ", "コ": "ｺ",
        "サ": "ｻ", "シ": "ｼ", "ス": "ｽ", "セ": "ｾ", "ソ": "ｿ",
        "タ": "ﾀ", "チ": "ﾁ", "ツ": "ﾂ", "テ": "ﾃ", "ト": "ﾄ",
        "ナ": "ﾅ", "ニ": "ﾆ", "ヌ": "ﾇ", "ネ": "ﾈ", "ノ": "ﾉ",
        "ハ": "ﾊ", "ヒ": "ﾋ", "フ": "ﾌ", "ヘ": "ﾍ", "ホ": "ﾎ",
        "マ": "ﾏ", "ミ": "ﾐ", "ム": "ﾑ", "メ": "ﾒ", "モ": "ﾓ",
        "ヤ": "ﾔ", "ユ": "ﾕ", "ヨ": "ﾖ",
        "ラ": "ﾗ", "リ": "ﾘ", "ル": "ﾙ", "レ": "ﾚ", "ロ": "ﾛ",
        "ワ": "ﾜ", "ヲ": "ｦ", "ン": "ﾝ",
        "ァ": "ｧ", "ィ": "ｨ", "ゥ": "ｩ", "ェ": "ｪ", "ォ": "ｫ",
        "ャ": "ｬ", "ュ": "ｭ", "ョ": "ｮ",
        "ッ": "ｯ"
    }

    ｼﾓﾅｲｽﾞ(ｼﾓﾅｲｽﾞﾃｷｽﾄ: string): string {
        for (var ｼ in this.ｼﾓﾅｲｽﾞﾃーﾌﾞﾙ) {
            if(ｼﾓﾅｲｽﾞﾃｷｽﾄ.indexOf(ｼ) >=0) {
               do{
                    ｼﾓﾅｲｽﾞﾃｷｽﾄ = ｼﾓﾅｲｽﾞﾃｷｽﾄ.replace(ｼ, this.ｼﾓﾅｲｽﾞﾃーﾌﾞﾙ[ｼ]);
               }while(ｼﾓﾅｲｽﾞﾃｷｽﾄ.indexOf(ｼ) >= 0);
            }
        }
        return ｼﾓﾅｲｽﾞﾃｷｽﾄ;
    }
    
    ﾊﾟｽｶﾗｲｽﾞ(ｼﾓﾅｲｽﾞﾃｷｽﾄ: string): string {
        var ﾊﾟｽｶﾗｲｽﾞﾃｷｽﾄ = "";
        var 大文字 = true;
        for (var i = 0; i < ｼﾓﾅｲｽﾞﾃｷｽﾄ.length; i++) {
            if ('_' == ｼﾓﾅｲｽﾞﾃｷｽﾄ[i]) {
                大文字 = true;
                continue;
            }
            if (true == 大文字) {
                ﾊﾟｽｶﾗｲｽﾞﾃｷｽﾄ += ｼﾓﾅｲｽﾞﾃｷｽﾄ[i].toUpperCase();
                大文字 = false;
                continue;
            }
            ﾊﾟｽｶﾗｲｽﾞﾃｷｽﾄ += ｼﾓﾅｲｽﾞﾃｷｽﾄ[i].toLowerCase();
        }
        return ﾊﾟｽｶﾗｲｽﾞﾃｷｽﾄ;
    }    
}

