export const scrollEffect = ( targetRef: React.MutableRefObject<any> ) =>{
    targetRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

  }