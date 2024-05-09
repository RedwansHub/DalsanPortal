// AuthForm.tsx
import React, { useState } from 'react';

interface AuthFormProps {
  onSubmit: (data: { [key: string]: string }) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let formErrors: { [key: string]: string } = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        formErrors[key] = `${key} is required`;
      }
    });
    if (Object.keys(formErrors).length === 0) {
      setErrors({});
      onSubmit(formData);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Full Name" onChange={handleChange} />
      {errors.name && <span className="error">{errors.name}</span>}
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      {errors.email && <span className="error">{errors.email}</span>}
      <textarea name="message" placeholder="Message" onChange={() => handleChange} />
      {errors.message && <span className="error">{errors.message}</span>}
      <button type="submit">Send</button>
    </form>
  );
};

export default AuthForm;
