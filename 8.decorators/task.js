//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {
    const hash = {
        hash: md5(args),
        value: func(...args)
    };
    
    let objectInCache = cache.find((item) => item.hash === hash.hash);
    if (objectInCache) {
        console.log("Из кеша: " + objectInCache.value);
        return "Из кеша: " + objectInCache.value
    }

    let result = func(...args);
    cache.push({
        hash: md5(args),
        value: result
    })

    if (cache.length > 5) {
        cache.splice(0)
    }

    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;  
  }

  return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  let isFirstCall = true;
  
  function wrapper(...args) {
    wrapper.allCount++;
    
    if (isFirstCall) {
      func.apply(this, args);
      wrapper.count++;
      isFirstCall = false;
    } else {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      timeoutId = setTimeout(() => {
        func.apply(this, args);
        wrapper.count++;
      }, delay);
    }
  }

  wrapper.count = 0;
  wrapper.allCount = 0;
  return wrapper;
}
