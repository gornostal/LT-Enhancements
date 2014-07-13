(ns lt.plugins.lt-enhancements
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.editor :as editor]
            [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool])
  (:require-macros [lt.macros :refer [defui behavior]]))

(defn- log [& more]
  (.log js/console (clj->js more)))

(defn- has-selection? [cm]
  (.doc.somethingSelected cm))

(defn- select-token [cm]
  (let [cur (.getCursor cm)
        token (.getTokenAt cm cur)
        start (js/CodeMirror.Pos. (.-line cur) (.-start token))
        end (js/CodeMirror.Pos. (.-line cur) (.-end token))]
    (.setSelection cm start end)))

(cmd/command {:command ::select-next-occurrence-token
              :desc "Lt Enhancements: select next occurrence of a token"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (let [cm (editor/->cm-ed ed)]
                          (if (has-selection? cm)
                            (js/CodeMirror.commands.selectNextOccurrence cm)
                            (select-token cm)))))})

