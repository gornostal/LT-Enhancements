if(!lt.util.load.provided_QMARK_('lt.plugins.lt-enhancements')) {
goog.provide('lt.plugins.lt_enhancements');
goog.require('cljs.core');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
/**
* @param {...*} var_args
*/
lt.plugins.lt_enhancements.log = (function() { 
var log__delegate = function (more){return console.log(cljs.core.clj__GT_js.call(null,more));
};
var log = function (var_args){
var more = null;if (arguments.length > 0) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,more);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__7849){
var more = cljs.core.seq(arglist__7849);
return log__delegate(more);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
lt.plugins.lt_enhancements.has_selection_QMARK_ = (function has_selection_QMARK_(cm){return cm.doc.somethingSelected();
});
lt.plugins.lt_enhancements.select_token = (function select_token(cm){var cur = cm.getCursor();var token = cm.getTokenAt(cur);var start = (new CodeMirror.Pos(cur.line,token.start));var end = (new CodeMirror.Pos(cur.line,token.end));return cm.setSelection(start,end);
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.lt-enhancements","select-next-occurrence-token","lt.plugins.lt-enhancements/select-next-occurrence-token",3030622406),new cljs.core.Keyword(null,"desc","desc",1016984067),"Lt Enhancements: select next occurrence of a token",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var cm = lt.objs.editor.__GT_cm_ed.call(null,ed);if(cljs.core.truth_(lt.plugins.lt_enhancements.has_selection_QMARK_.call(null,cm)))
{return CodeMirror.commands.selectNextOccurrence(cm);
} else
{return lt.plugins.lt_enhancements.select_token.call(null,cm);
}
} else
{return null;
}
})], null));
}

//# sourceMappingURL=ltenhancements_compiled.js.map