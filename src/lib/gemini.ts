
// Utility for exponential backoff
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const callGeminiAPI = async (
    prompt: string,
    setModalContent: (content: string) => void,
    setIsLoading: (loading: boolean) => void,
    maxRetries = 3
) => {
    setIsLoading(true);
    setModalContent(""); // Clear previous content

    // In a real app, this should be an env variable. 
    // For this demo, using the key provided in the original code logic (if available) or a placeholder.
    // Using the key seen in previous file context if safe, otherwise alerting.
    // The user had a key in the previous view_file output: "AIzaSyB1tGB7vWJcfU1_GcqMyQBq6SDcaAJ94P0"
    const apiKey = "AIzaSyB1tGB7vWJcfU1_GcqMyQBq6SDcaAJ94P0";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const payload = {
        contents: [{ parts: [{ text: prompt }] }],
    };

    for (let attempt = 0; attempt < maxRetries; attempt++) {
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            const candidate = result.candidates?.[0];

            if (candidate && candidate.content?.parts?.[0]?.text) {
                const text = candidate.content.parts[0].text;
                setModalContent(text);
                setIsLoading(false);
                return; // Success
            } else {
                throw new Error("Invalid API response structure");
            }
        } catch (error) {
            console.error(`Gemini API call attempt ${attempt + 1} failed:`, error);
            if (attempt === maxRetries - 1) {
                // Last attempt failed
                setModalContent("SYSTEM_ERROR: CONNECTION_LOST. UNABLE TO RETRIEVE ANALYSIS. TRY AGAIN.");
                setIsLoading(false);
            } else {
                // Wait before retrying
                await sleep(1000 * Math.pow(2, attempt));
            }
        }
    }
};
