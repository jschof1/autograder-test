# TO GET IT RUNNING
1. `npm i`
2. `grunt build`
3. `grunt dev`



## The functions being used

fileInputView Class
This class is derived from the QuestionView class and it represents a file input view.

events()
This function sets up the listeners for different HTML events such as focus, blur, change and keyup on the elements with the class .js-item-input.

resetQuestionOnRevisit()
This function is called when the user revisits a question that they have already answered. It resets the question.

setupQuestion()
This function sets up the randomisation for the question using the model.

onQuestionRendered()
This function sets the ready status when the question has been rendered.

resetQuestion()
This function resets the question by resetting active items and items in the model.

showCorrectAnswer()
This function shows the correct answer by setting the _isCorrectAnswerShown field in the model to true.

hideCorrectAnswer()
This function hides the correct answer by setting the _isCorrectAnswerShown field in the model to false.

getFile()
This function gets the file input from the .js-item-input element. It uses a FileReader to read the file as text and returns a Promise that resolves with an object containing parsed CSV data and the original file contents.

createTable()
This function creates a data table from the parsed CSV data. It iterates through the CSV data and formats it into a structure compatible with DataTable.

checkCsvStructure()
This function checks the CSV file for potential issues such as inconsistent line breaks, undeclared headers, ragged rows, blank rows, whitespace issues, 404 errors, UTF-8 issues, single comma-separated columns, inconsistent values, empty column names, and duplicate column names. It returns an array of errors found.

validateAjv(input)
This function validates the CSV data against a JSON schema using the AJV (Another JSON Schema Validator) library. It converts the input into an object with integer values where applicable, validates each item in the object against the schema, and returns an array of validation errors.
