import TextField from '@mui/material/TextField';
import { forwardRef } from 'react';
import { sx } from './Input.styled';
import type { TextFieldProps } from '@mui/material/TextField';
import type { FC } from 'react';

export const Input: FC<TextFieldProps> = forwardRef(({ ...rest }, ref) => <TextField ref={ref} sx={sx} {...rest} />);
