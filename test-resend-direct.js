// Direct test without dotenv
const { Resend } = require('resend');

const API_KEY = 're_azzy4tJe_9aYPrN3puZSQVd2FQs8W6ys8';

console.log('\n=== Direct Resend API Test ===\n');
console.log('✓ Using API key directly (not from .env)');
console.log(`  Key length: ${API_KEY.length} characters\n`);

async function testResendAPI() {
    try {
        const resend = new Resend(API_KEY);

        console.log('🔄 Testing Resend API connection...\n');

        const data = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: ['kcherath7@gmail.com'],
            subject: 'Test Email - Resend API Verification',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333;">Resend API Test</h2>
                    <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
                        <p>This is a test email to verify that your Resend API integration is working correctly.</p>
                        <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
                        <p><strong>Status:</strong> ✓ API is working!</p>
                    </div>
                </div>
            `,
        });

        console.log('✅ SUCCESS! Email sent successfully\n');
        console.log('Response data:');
        console.log(JSON.stringify(data, null, 2));
        console.log('\n✓ Resend API key is VALID and working!');
        console.log('  Check your email at kcherath7@gmail.com\n');

    } catch (error) {
        console.error('❌ ERROR: Failed to send email\n');
        console.error('Error message:', error.message);

        if (error.statusCode) {
            console.error('Status code:', error.statusCode);
        }

        console.error('\nThis means the API key is likely invalid or has insufficient permissions.\n');
        process.exit(1);
    }
}

testResendAPI();
