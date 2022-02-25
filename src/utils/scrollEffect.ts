export const scrollEffect = ( targetRef: any ) =>{
    targetRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }