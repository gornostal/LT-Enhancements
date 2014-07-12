(ns lt.plugins.lt-enhancements
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.editor :as editor]
            [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool])
  (:require-macros [lt.macros :refer [defui behavior]]))

#_(object/object* ::lt-enhancements.hello
                :tags [:lt-enhancements.hello]
                :name "lt-enhancements"
                :init (fn [this]
                        (hello-panel this)))

#_(def scroll (object/create ::lt-enhancements.hello))

(cmd/command {:command ::scroll-lines.down
              :desc "Lt Enhancements: scroll lines down"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (js/CodeMirror.commands.scrollLineDown (editor/->cm-ed ed))))})

(cmd/command {:command ::scroll-lines.up
              :desc "Lt Enhancements: scroll lines up"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (js/CodeMirror.commands.scrollLineUp (editor/->cm-ed ed))))})
