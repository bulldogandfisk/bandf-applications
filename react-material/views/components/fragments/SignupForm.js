import React, { useState } from 'react';
import { Grid, TextField, FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export const SignupForm = ({ state }) => {
    const theme = useTheme();
    const { t, i18n } = useTranslation();

    const answers = state.answers();

    const maximumDate = dayjs(Date.now() - 5.676e11); // - 18 years
    const earliestDate = dayjs('1938-01-01');
    const [birthDate, setBirthDate] = useState(dayjs(new Date(answers.birthDate ?? maximumDate)));
    const [dateError, setDateError] = useState(null);
    const dateErrorMessage = React.useMemo(() => {
        return dateError === 'invalidDate' ? `Please select a date` : '';
    }, [dateError]);

    const onChange = event => {
        const target = event.target;
        state.storeAnswers({
            [target.name]: target.value
        });
    };

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    {...t('form.account.firstName')}
                    name="firstName"
                    variant="filled"
                    onChange={onChange}
                    autoComplete="off"
                    value={answers.firstName}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    {...t('form.account.lastName')}
                    name="lastName"
                    variant="filled"
                    onChange={onChange}
                    autoComplete="off"
                    value={answers.lastName}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    {...t('form.account.email')}
                    name="email"
                    type="email"
                    variant="filled"
                    onChange={onChange}
                    autoComplete="off"
                    value={answers.email}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    {...t('form.account.password')}
                    name="password"
                    type="password"
                    variant="filled"
                    onChange={onChange}
                    autoComplete="off"
                    value={answers.password}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                    <InputLabel>{t('form.info.over18').label}</InputLabel>
                    <Select required name="over18" value={answers.over18} onChange={onChange} variant="filled">
                        <MenuItem value="yes">Yes</MenuItem>
                        <MenuItem value="no">No</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    );
};
