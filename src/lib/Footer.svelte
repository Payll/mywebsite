<style>
    .footer {
        width: 100%;
        color: white; /* Light text */
        padding: 20px 0; /* Some vertical padding */
    }

    .footer-content {
        display: flex;
        justify-content: space-between; /* Space out left and right content */
        align-items: center; /* Align items vertically */
        max-width: 1200px; /* Max width of the content */
        margin: 0 auto; /* Center the content */
        padding: 0 20px; /* Padding on the sides */
    }

    .footer-left p {
        margin: 0; /* Remove default margin */
    }

    .footer-right a {
        color: #0d6efd; /* Bootstrap primary color for link */
        text-decoration: none; /* No underline */
        margin-left: 20px; /* Space out links if you have more than one */
    }

    .footer-right a:hover {
        text-decoration: underline; /* Underline on hover */
    }

    @media (max-width: 768px) {
        .footer-content {
            flex-direction: column;
            text-align: center;
        }

        .footer-right {
            margin-top: 10px; /* Extra space between left and right content on mobile */
        }
    }
</style>

<script>
    let year = new Date().getFullYear();
</script>

<footer class="footer">
    <div class="footer-content">
        <!-- Left-aligned content -->
        <div class="footer-left">
            <p>© {year} Yann Paillard. All Rights Reserved.</p>
        </div>
        
        <!-- Right-aligned content -->
        <div class="footer-right">
            <a href="https://github.com/Payll/mywebsite" target="_blank" rel="noreferrer noopener">Code on GitHub</a>
            <!-- Add additional links or social media icons here -->
        </div>
    </div>
</footer>