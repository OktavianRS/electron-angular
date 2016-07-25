var Modal2 = (function() {

  var modalOpen = document.querySelector('[data-modal="open2"]'),
      modalClose = document.querySelector('[data-modal="close2"]'),
      modalWrapper = document.querySelector('[data-modal="wrapper2"]');

      return {
        init: function() {
          this.abrir();
          this.fechar();
        },

        abrir: function() {
          modalOpen.onclick = function(e) {
            e.preventDefault;
              modalWrapper.classList.add("modal-opened");
          }
        },

        fechar: function() {
            modalClose.onclick = function(e) {
              e.preventDefault;
              modalWrapper.classList.remove("modal-opened");
            }
        }
      }
}());



Modal2.init();

var Modal3 = (function() {

  var modalOpen = document.querySelector('[data-modal="open3"]'),
      modalClose = document.querySelector('[data-modal="close3"]'),
      modalWrapper = document.querySelector('[data-modal="wrapper3"]');

      return {
        init: function() {
          this.abrir();
          this.fechar();
        },

        abrir: function() {
          modalOpen.onclick = function(e) {
            e.preventDefault;
              modalWrapper.classList.add("modal-opened");
          }
        },

        fechar: function() {
            modalClose.onclick = function(e) {
              e.preventDefault;
              modalWrapper.classList.remove("modal-opened");
            }
        }
      }
}());



Modal3.init();

var Modal4 = (function() {

  var modalOpen = document.querySelector('[data-modal="open4"]'),
      modalClose = document.querySelector('[data-modal="close4"]'),
      modalWrapper = document.querySelector('[data-modal="wrapper4"]');

      return {
        init: function() {
          this.abrir();
          this.fechar();
        },

        abrir: function() {
          modalOpen.onclick = function(e) {
            e.preventDefault;
              modalWrapper.classList.add("modal-opened");
          }
        },

        fechar: function() {
            modalClose.onclick = function(e) {
              e.preventDefault;
              modalWrapper.classList.remove("modal-opened");
            }
        }
      }
}());



Modal4.init();

var Modal14 = (function() {

  var modalOpen = document.querySelector('[data-modal="open14"]'),
      modalClose = document.querySelector('[data-modal="close14"]'),
      modalWrapper = document.querySelector('[data-modal="wrapper14"]');

      return {
        init: function() {
          this.abrir();
          this.fechar();
        },

        abrir: function() {
          modalOpen.onclick = function(e) {
            e.preventDefault;
              modalWrapper.classList.add("modal-opened");
          }
        },

        fechar: function() {
            modalClose.onclick = function(e) {
              e.preventDefault;
              modalWrapper.classList.remove("modal-opened");
            }
        }
      }
}());



Modal14.init();
