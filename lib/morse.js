async function morse(teks) {

s = teks.toLowerCase();
s = s.replace(/ /g, ' ,');
s = s.replace(/a/g, ' •-');
s = s.replace(/b/g, ' -•••');
s = s.replace(/c/g, ' -•-•');
s = s.replace(/d/g, ' -••');
s = s.replace(/e/g, ' •');
s = s.replace(/f/g, ' ••-•');
s = s.replace(/g/g, ' --•');
s = s.replace(/h/g, ' ••••');
s = s.replace(/i/g, ' ••');
s = s.replace(/j/g, ' •---');
s = s.replace(/k/g, ' -•-');
s = s.replace(/l/g, ' •-••');
s = s.replace(/m/g, ' --');
s = s.replace(/n/g, ' -•');
s = s.replace(/o/g, ' ---');
s = s.replace(/p/g, ' •--•');
s = s.replace(/q/g, ' --•-');
s = s.replace(/r/g, ' •-•');
s = s.replace(/s/g, ' •••');
s = s.replace(/t/g, ' -');
s = s.replace(/u/g, ' ••-');
s = s.replace(/v/g, ' •••-');
s = s.replace(/w/g, ' •--');
s = s.replace(/x/g, ' -••-');
s = s.replace(/y/g, ' -•--');
s = s.replace(/z/g, ' --••');

s = s.replace(/1/g, ' •----');
s = s.replace(/2/g, ' ••---');
s = s.replace(/3/g, ' •••--');
s = s.replace(/4/g, ' ••••-');
s = s.replace(/5/g, ' •••••');
s = s.replace(/6/g, ' -••••');
s = s.replace(/7/g, ' --•••');
s = s.replace(/8/g, ' ---••');
s = s.replace(/9/g, ' ----•');
s = s.replace(/0/g, ' -----');

 return (s)
}

module.exports = { morse }