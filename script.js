// Function to book an appointment
function bookAppointment(doctorName) {
    alert(`Appointment booked successfully with ${doctorName}!\nOur staff will contact you shortly to confirm the appointment.`);
}

// Function to buy medicine
function buyMedicine(medicineName) {
    alert(`Thank you for purchasing ${medicineName}!\nPlease collect your medicine from our pharmacy.`);
}

// Function to show about us information
function showAbout() {
    alert(`Welcome to Healthcare Hospital!\n\nWe are a leading healthcare institution committed to providing the best medical care to our patients. With state-of-the-art facilities and experienced medical professionals, we ensure the highest standards of healthcare services.\n\nEstablished in 1990, we have been serving our community with dedication and excellence.`);
}

// Function to show contact information
function showContact() {
    alert(`Contact Information:\n\nAddress: 123 Healthcare Street, Medical City, MC 12345\nPhone: (555) 123-4567\nEmail: info@healthcarehospital.com\n\nEmergency: (555) 987-6543\n\nOffice Hours: Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 9:00 AM - 1:00 PM\nSunday: Closed`);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); 