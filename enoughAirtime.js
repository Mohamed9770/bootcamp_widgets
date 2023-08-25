function enoughAirtime(usage,airtime) {
    let arr=usage.split(',');
      let total=0;
      for (let i=0 ; i<arr.length; i++) {
      if (arr[i].includes('call')) {
      total += 1.88;
      } else if (arr[i].includes('data')) {
      total += 12;
      } else if (arr[i].includes('sms')) {
       total += 0.75;
      }
    }
      if (total<airtime) {
      return 'R' +(airtime-total).toFixed(2);
      } else {
      return 'R' +(0.00).toFixed(2);
      }
    }