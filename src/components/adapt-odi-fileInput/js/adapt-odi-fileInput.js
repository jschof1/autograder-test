define([
  'core/js/adapt',
  './fileInputView',
  'core/js/models/itemsQuestionModel'
], function(component, fileInputView, ItemsQuestionModel) {

  return component.register('fileinput', {
    view: fileInputView,
    // Extend ItemsQuestionModel to distinguish McqModel in
    // the inheritance chain and allow targeted model extensions.
    model: ItemsQuestionModel.extend({})
  });

});
