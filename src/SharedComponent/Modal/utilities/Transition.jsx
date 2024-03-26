import React, { useRef, useEffect, useContext } from "react";
import { CSSTransition as ReactCSSTransition } from "react-transition-group";

const TransitionContext = React.createContext({
  parent: {},
});

function useIsInitialRender() {
  const isInitialRender = useRef(true);
  useEffect(() => {
    isInitialRender.current = false;
  }, []);
  return isInitialRender.current;
}

function CSSTransition({
  show,
  enter = "",
  enterstart = "",
  enterend = "",
  leave = "",
  leavestart = "",
  leaveend = "",
  appear,
  unmountOnExit,
  tag = "div",
  children,
  ...rest
}) {
  const enterClasses = enter.split(" ").filter((s) => s.length);
  const enterstartClasses = enterstart.split(" ").filter((s) => s.length);
  const enterendClasses = enterend.split(" ").filter((s) => s.length);
  const leaveClasses = leave.split(" ").filter((s) => s.length);
  const leavestartClasses = leavestart.split(" ").filter((s) => s.length);
  const leaveendClasses = leaveend.split(" ").filter((s) => s.length);
  const removeFromDom = unmountOnExit;

  function addClasses(node, classes) {
    classes.length && node.classList.add(...classes);
  }

  function removeClasses(node, classes) {
    classes.length && node.classList.remove(...classes);
  }

  const noderef = useRef(null);
  const Component = tag;

  return (
    <ReactCSSTransition
      appear={appear}
      noderef={noderef}
      unmountOnExit={removeFromDom}
      in={Boolean(show)}
      addEndListener={(done) => {
        noderef.current.addEventListener("transitionend", done, false);
      }}
      onEnter={() => {
        if (!removeFromDom) noderef.current.style.display = null;
        addClasses(noderef.current, [...enterClasses, ...enterstartClasses]);
      }}
      onEntering={() => {
        removeClasses(noderef.current, enterstartClasses);
        addClasses(noderef.current, enterendClasses);
      }}
      onEntered={() => {
        removeClasses(noderef.current, [...enterendClasses, ...enterClasses]);
      }}
      onExit={() => {
        addClasses(noderef.current, [...leaveClasses, ...leavestartClasses]);
      }}
      onExiting={() => {
        removeClasses(noderef.current, leavestartClasses);
        addClasses(noderef.current, leaveendClasses);
      }}
      onExited={() => {
        removeClasses(noderef.current, [...leaveendClasses, ...leaveClasses]);
        if (!removeFromDom) noderef.current.style.display = "none";
      }}>
      <Component
        ref={noderef}
        {...rest}
        style={{ display: !removeFromDom ? "none" : null }}>
        {children}
      </Component>
    </ReactCSSTransition>
  );
}

function Transition({ show, appear, ...rest }) {
  const { parent } = useContext(TransitionContext);
  const isInitialRender = useIsInitialRender();
  const isChild = show === undefined;

  if (isChild) {
    return (
      <CSSTransition
        appear={parent.appear || !parent.isInitialRender}
        show={parent.show}
        {...rest}
      />
    );
  }

  return (
    <TransitionContext.Provider
      value={{
        parent: {
          show,
          isInitialRender,
          appear,
        },
      }}>
      <CSSTransition appear={appear} show={show} {...rest} />
    </TransitionContext.Provider>
  );
}

export default Transition;
