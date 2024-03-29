
// Typing Animation text scramble

class TextScramble {
    constructor(el) {
      this.el = el;
      this.chars = '▓!@#$%&~░░▲▼';
      this.update = this.update.bind(this);
    }
    setText(newText) {
      const oldText = this.el.innerText;
      const length = Math.max(oldText.length, newText.length);
      const promise = new Promise((resolve) => (this.resolve = resolve));
      this.queue = [];
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || '';
        const to = newText[i] || '';
        const start = Math.floor(Math.random() * 60);
        const end = start + Math.floor(Math.random() * 60);
        this.queue.push({ from, to, start, end });
      }
      cancelAnimationFrame(this.frameRequest);
      this.frame = 0;
      this.update();
      return promise;
    }
    update() {
      let output = '';
      let complete = 0;
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i];
        if (this.frame >= end) {
          complete++;
          output += to;
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar();
            this.queue[i].char = char;
          }
          output += `<span class="dud">${char}</span>`;
        } else {
          output += from;
        }
      }
      this.el.innerHTML = output;
      if (complete === this.queue.length) {
        this.resolve();
      } else {
        this.frameRequest = requestAnimationFrame(this.update);
        this.frame++;
      }
    }
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
  }

  // An example on how to use it:
  const phrases = [
  'Web Developer',
        // 'UI/UX Designer',
        'Photographer',
        'Video Editor',
        'Content Writer',
        'Student',
        'Learner',
        'Musician',
        'Programmer',
        'Coder',
        'Tech Geek',

  ];

  const el = document.querySelector('.messenger');
  const fx = new TextScramble(el);

  let counter = 0;
  const next = () => {
    fx.setText(phrases[counter]).then(() => {
      setTimeout(next, 2000);
    });
    counter = (counter + 1) % phrases.length;
  };

  next();

  // Typing Animation text scramble ends here

// ************************************************************************************************************

  // bounce animationin inside the skills section

  window.onload = function() {
    const balls = document.querySelectorAll('.blur-ball, .blur-ball2');
    balls.forEach((ball, i) => {
      ball.style.animationDuration = Math.floor(Math.random() * 5 + 5) + 's';
      ball.style.animationDelay = Math.floor(Math.random() * 5) + 's';
      if (i % 2 === 0) {
        ball.style.animationDirection = 'normal';
      } else {
        ball.style.animationDirection = 'reverse';
      }
    });
  };

  // bounce animationin inside the skills section ends here