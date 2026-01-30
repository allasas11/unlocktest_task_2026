
import './App.css';
import { useState } from 'react';
import { 
  Container, Box, TextField, Button, Typography, Paper, CircularProgress, Fade 
} from '@mui/material';
import axios from 'axios';

function App() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;
    
    setLoading(true);
    setAnswer('');
    
    try {
      const response = await axios.post('/api/ask', { question });
      setAnswer(response.data.answer);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setAnswer(error.response?.data?.error || 'Server error. Check if backend is running!');
      } else {
        setAnswer('An unexpected error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 10, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom fontWeight="bold" color="primary">
          UNLOCK Tests Helper
        </Typography>
        
        <Paper elevation={3} sx={{ p: 4, mt: 4, borderRadius: 4 }}>
          <TextField
            fullWidth
            label="What would you like to know?"
            variant="outlined"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAsk()}
            sx={{ mb: 2 }}
          />
          
          <Button 
            fullWidth 
            variant="contained" 
            size="large" 
            onClick={handleAsk}
            disabled={loading}
            sx={{ borderRadius: 2, py: 1.5 }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Ask Question"}
          </Button>

          {answer && (
            <Fade in={!!answer}>
              <Box sx={{ mt: 4, p: 2, bgcolor: '#f5f5f5', borderRadius: 2 }}>
                <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                  Answer:
                </Typography>
                <Typography variant="body1" fontWeight="500">
                  {answer}
                </Typography>
              </Box>
            </Fade>
          )}
        </Paper>
      </Box>
    </Container>
  );
}

export default App;
