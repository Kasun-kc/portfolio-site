// Test script to verify Resend API configuration
require('dotenv').config({ path: '.env.local' });

console.log('\n=== Resend API Configuration Test ===\n');

// Check if environment variable is loaded
const apiKey = process.env.RESEND_API_KEY;

if (!apiKey) {
    console.error('❌ ERROR: RESEND_API_KEY environment variable is not set!');
    console.log('\nPlease ensure:');
    console.log('1. .env.local file exists in the project root');
    console.log('2. RESEND_API_KEY is defined in .env.local');
    console.log('3. The format is: RESEND_API_KEY=re_your_api_key_here');
    process.exit(1);
}

console.log('✓ RESEND_API_KEY environment variable is loaded');
console.log(`  Key length: ${apiKey.length} characters`);
console.log(`  Key prefix: ${apiKey.substring(0, 5)}...`);

// Test Resend API
async function testResendAPI() {
    try {
        const { Resend } = require('resend');
        const resend = new Resend(apiKey);

        console.log('\n🔄 Testing Resend API connection...\n');

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

        console.log('✅ SUCCESS! Email sent successfully');
        console.log('\nResponse data:');
        console.log(JSON.stringify(data, null, 2));
        console.log('\n✓ Resend API is working correctly!');
        console.log('  Check your email at kcherath7@gmail.com\n');

    } catch (error) {
        console.error('❌ ERROR: Failed to send email via Resend API\n');
        console.error('Error details:');
        console.error(`  Message: ${error.message}`);
        console.error(`  Name: ${error.name}`);

        if (error.response) {
            console.error(`  Status: ${error.response.status}`);
            console.error(`  Data: ${JSON.stringify(error.response.data, null, 2)}`);
        }

        console.error('\nPossible issues:');
        console.error('1. Invalid API key');
        console.error('2. API key does not have permission to send emails');
        console.error('3. The "from" email address is not verified in Resend');
        console.error('4. Network connectivity issues\n');

        process.exit(1);
    }
}

testResendAPI();
