      // Modal functionality
      const modal = document.getElementById('optionsModal');
      const modalOverlay = modal.querySelector('.modal__overlay');
      const closeBtn = modal.querySelector('.modal__close');
      const ellipsisButtons = document.querySelectorAll('.bio-link__button-ellipsis');

      // Function to open modal
      function openModal() {
        modal.classList.add('modal--active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; // Prevent background scroll

        // Focus management for accessibility
        closeBtn.focus();
      }

      // Function to close modal
      function closeModal() {
        modal.classList.remove('modal--active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = ''; // Restore scroll
      }

      // Add click event to all ellipsis buttons
      ellipsisButtons.forEach((button) => {
        button.addEventListener('click', openModal);
      });

      // Close modal when clicking overlay
      modalOverlay.addEventListener('click', closeModal);

      // Close modal when clicking close button
      closeBtn.addEventListener('click', closeModal);

      // Close modal with Escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('modal--active')) {
          closeModal();
        }
      });
