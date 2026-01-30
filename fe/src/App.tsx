
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
      <Paper 
        elevation={0} 
        sx={{ 
          p: { xs: 3, sm: 6 }, // Responsive padding
          borderRadius: 4, 
          boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.3)'
        }}
      >
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 800, color: '#1a237e' }}>
          Unlock Assistant
        </Typography>

        <TextField
          fullWidth
          placeholder="Ask me anything..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          sx={{ 
            mb: 3,
            '& .MuiOutlinedInput-root': {
              borderRadius: 3,
              backgroundColor: '#fff'
            }
          }}
        />

        <Button 
          fullWidth 
          variant="contained" 
          onClick={handleAsk}
          sx={{ 
            py: 1.5, 
            borderRadius: 3, 
            textTransform: 'none', 
            fontSize: '1.1rem',
            boxShadow: '0 4px 14px 0 rgba(0,118,255,0.39)',
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'
          }}
        >
          {loading ? <CircularProgress size={26} color="inherit" /> : "Get Answer"}
        </Button>

        {answer && (
          <Fade in={!!answer}>
            <Box sx={{ mt: 4, p: 3, borderRadius: 3, bgcolor: '#e3f2fd', borderLeft: '6px solid #2196f3' }}>
              <Typography variant="body1" sx={{ color: '#0d47a1', lineHeight: 1.6 }}>
                {answer}
              </Typography>
            </Box>
          </Fade>
        )}
      </Paper>
    </Container>
  );
}

export default App;
