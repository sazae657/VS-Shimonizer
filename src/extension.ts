import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    let previewUri = vscode.Uri.parse('struct-preview://authority/struct-preview');
    var ﾅｲｻﾞー = new ｼﾓﾅｲｻﾞー();
    class TextDocumentContentProvider implements vscode.TextDocumentContentProvider {

        private _onDidChange = new vscode.EventEmitter<vscode.Uri>();

        public provideTextDocumentContent(uri: vscode.Uri): string {
            return this.createStructSnippet();
        }

        get onDidChange(): vscode.Event<vscode.Uri> {
            return this._onDidChange.event;
        }

        public update(uri: vscode.Uri) {
            this._onDidChange.fire(uri);
        }

        private createStructSnippet() {
            let editor = vscode.window.activeTextEditor;
            if (!editor) {
                return this.errorSnippet("開いてるｴｼﾞﾀがないよう");
            }            
            return this.extractSnippet();
        }

        private extractSnippet(): string {
            let editor = vscode.window.activeTextEditor;
            let text = editor.document.getText();
            let selStart = editor.document.offsetAt(editor.selection.anchor);
            return this.snippet(editor.document, selStart, text.length);
        }

        private errorSnippet(error: string): string {
            return `<body>${error}</body>`;
        }

        private snippet(document: vscode.TextDocument, propStart: number, propEnd: number): string {
            const properties = document.getText().slice(propStart, propEnd);
            let text = "";
            for (const s of properties.split(/\n/)) {
                const part = s.trim().split(/[\s\t]+/);
                if (part.length == 0) {
                    break;
                }
                if (part.length == 1) {
                    text += s + "\n";
                    break;
                }
                let i = 0;
                for (i = 0; i < part.length-1; i++) {
                    text += part[i] + " ";
                }
                text += ﾅｲｻﾞー.ﾊﾟｽｶﾗｲｽﾞ(part[i]) + "\n";
            }

            return `
                <body>
                    <div>でぶ</div>
                    <hr>
                    <pre>${text}</pre>
                </body>`;
        }
    }
    let provider = new TextDocumentContentProvider();
    let registration = vscode.workspace.registerTextDocumentContentProvider('struct-preview', provider);
    vscode.workspace.onDidChangeTextDocument((e: vscode.TextDocumentChangeEvent) => {
        if (e.document === vscode.window.activeTextEditor.document) {
            provider.update(previewUri);
        }
    });
    vscode.window.onDidChangeTextEditorSelection((e: vscode.TextEditorSelectionChangeEvent) => {
        if (e.textEditor === vscode.window.activeTextEditor) {
            provider.update(previewUri);
        }
    });
    let disposable = vscode.commands.registerCommand('extension.Struct', () => {
        return vscode.commands.executeCommand('vscode.previewHtml', 
            previewUri, vscode.ViewColumn.Two, 'かうぞうたい').then((success) => {
        }, (reason) => {
            vscode.window.showErrorMessage(reason);
        });
    });
    context.subscriptions.push(disposable, registration);

    var ｼﾓﾅｲｽﾞｴﾃﾞｨﾀー = vscode.commands.registerTextEditorCommand(
        'extension.Shimonize',
        (ｴﾃﾞｨﾀー, ｴﾃﾞｨｯﾄ) => {
            if (ｴﾃﾞｨﾀー.selection.isEmpty) {
                vscode.window.showInformationMessage("（ ◜◡◝ ）");
                return;
            }
            var ｼﾓﾅｲｽﾞﾃｷｽﾄ = ｴﾃﾞｨﾀー.document.getText(ｴﾃﾞｨﾀー.selection);
            ｴﾃﾞｨｯﾄ.replace(ｴﾃﾞｨﾀー.selection, ﾅｲｻﾞー.ｼﾓﾅｲｽﾞ(ｼﾓﾅｲｽﾞﾃｷｽﾄ));
        });

    context.subscriptions.push(ｼﾓﾅｲｽﾞｴﾃﾞｨﾀー);
    var pascalize = vscode.commands.registerTextEditorCommand(
        'extension.Pascalize',
        (ｴﾃﾞｨﾀー, ｴﾃﾞｨｯﾄ) => {
            if (ｴﾃﾞｨﾀー.selection.isEmpty) {
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
            if (ｼﾓﾅｲｽﾞﾃｷｽﾄ.indexOf(ｼ) >= 0) {
                do {
                    ｼﾓﾅｲｽﾞﾃｷｽﾄ = ｼﾓﾅｲｽﾞﾃｷｽﾄ.replace(ｼ, this.ｼﾓﾅｲｽﾞﾃーﾌﾞﾙ[ｼ]);
                } while (ｼﾓﾅｲｽﾞﾃｷｽﾄ.indexOf(ｼ) >= 0);
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

