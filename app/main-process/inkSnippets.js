const fs = require('fs');
const path = require('path');

// Find longer snippets folder
const snippetsDirRelease = path.join(__dirname, "../../app.asar.unpacked/main-process", "ink/longer-ink-snippets");
const snippetsDirDev = path.join(__dirname, "ink/longer-ink-snippets");

var snippetsDir = snippetsDirRelease;
try { fs.accessSync(snippetsDir) }
catch(e) {
    snippetsDir = snippetsDirDev;
}

function loadLongerSnippet(inkFilename) {
    var inkContent = fs.readFileSync(path.join(snippetsDir, inkFilename));
    return inkContent+"\n";
}

//-------------------
// STYLE GUIDELINE
// PLEASE READ!
//-------------------
// For multi-line style snippets please include a final newline (\n)
// so that they appear as a full block. This includes snippets that
// are single but full lines (e.g. choices).
// The only time you shouldn't put a newline on the end is if the
// snippet is definitely meant to be insert into the middle of
// a line (such as an inline conditional).
//
// You can use {separator: true} either in the category or individual
// snippet lists to insert a separator in the menu.

exports.snippets = [

    //-------------------
    // Basic structure
    //-------------------
    {
        categoryName: "Basic structure",
        snippets: [
            {
                name: "Knot (main section)",
                ink: "=== knotName ===\n"
                    +"This is the content of the knot.\n"
                    +"-> END\n"
            },
            {
                name: "Stitch (sub-section)",
                ink: "= stitchName\n"
                    +"This is the content of the stitch that should be embedded within a knot.\n"
                    +"-> END\n"
            },
            {separator: true},
            {
                name: "Divert",
                ink: "-> targetKnotName"
            },
            {
                name: "Ending indicator",
                ink: "-> END\n"
            }
        ]
    },

    //-------------------
    // CHOICES
    //-------------------
    {
        categoryName: "Choices",
        snippets: [
            {
                name: "Basic Choice",
                ink:  "* This is a choice that can only be chosen once\n"
            },
            {
                name: "Sticky choice",
                ink: "+ This is a sticky choice - the player can choose it more than once\n"
            },
            {
                name: "Choice without printing",
                ink: "* [A choice where the content isn't printed after choosing]\n"
            },
            {
                name: "Choice with mixed output",
                ink: "* Try [it] this example!\n"
            },
        ]
    },

    //-------------------
    // VARIABLES
    //-------------------
    {
        categoryName: "Variables",
        snippets: [
            {
                "name": "Global variable",
                "ink": "VAR myNumber = 5\n"
            },
            {
                "name": "Temporary variable",
                "ink": "temp myTemporaryValue = 5\n"
            },
            {
                "name": "Modify variable",
                "ink": "~ myNumber = myNumber + 1\n"
            },

        ]
    },

    //-------------------
    // INLINE LOGIC
    //-------------------
    {
        categoryName: "Inline logic",
        snippets: [
            {
                name: "Condition",
                ink: "{yourVariable: This is written if yourVariable is true|Otherwise this is written}"
            }
        ]
    },

    //-------------------
    // MULTI-LINE LOGIC
    //-------------------
    {
        categoryName: "Multi-line logic",
        snippets: [
            {
                name: "Condition",
                ink: "{yourVariable:\n"+
                     "    This is written if yourVariable is true.\n"+
                     "  - else:\n"+
                     "    Otherwise this is written.\n"+
                     "}\n"
            }
        ]
    },

    {separator: true},

    {
        categoryName: "Full stories",
        snippets: [
            {
                name: "The Intercept",
                ink: loadLongerSnippet("theintercept.ink")
            }
        ]
    }
];