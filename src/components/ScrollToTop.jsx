import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// App.jsx က ပို့လိုက်တဲ့ mainRef ကို prop အနေနဲ့ လက်ခံပါ
function ScrollToTop({ mainRef }) { 
  const { pathname } = useLocation();

  useEffect(() => {
    // mainRef ရှိနေတယ်ဆိုရင် အဲ့ဒီ ref ချိတ်ထားတဲ့ element ကို scroll လုပ်ပါ
    if (mainRef && mainRef.current) {
      mainRef.current.scrollTo(0, 0);
    }
  }, [pathname]); // URL path ပြောင်းတိုင်း အလုပ်လုပ်ပါစေ

  return null;
}
    
export default ScrollToTop;