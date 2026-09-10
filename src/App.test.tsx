import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('MTX Smart City prototype', () => {
  it('updates the challenge response from the selector', () => {
    render(<App />)
    fireEvent.click(screen.getByRole('button', { name: /Reactive infrastructure maintenance/i }))
    expect(screen.getByText(/Connect asset conditions/)).toBeInTheDocument()
  })

  it('supports arrow-key navigation in dashboard tabs', () => {
    render(<App />)
    const citywide = screen.getByRole('tab', { name: 'Citywide' })
    citywide.focus()
    fireEvent.keyDown(citywide, { key: 'ArrowRight' })
    expect(screen.getAllByRole('tab', { name: 'Infrastructure' })[0]).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByText('Condition reviews')).toBeInTheDocument()
  })

  it('filters and selects fictional map events', () => {
    render(<App />)
    fireEvent.click(screen.getByRole('button', { name: /Water service issue in East Commons/i }))
    expect(screen.getByText('Provider review')).toBeInTheDocument()
    expect(screen.getByText('Utility Coordination')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('checkbox', { name: 'Utility events' }))
    expect(screen.queryByText('Provider review')).not.toBeInTheDocument()
  })

  it('confirms that the consultation form stays local', () => {
    render(<App />)
    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Jordan Lee' } })
    fireEvent.change(screen.getByLabelText('Municipality or organization'), { target: { value: 'Example Municipality' } })
    fireEvent.change(screen.getByLabelText('Role'), { target: { value: 'Program lead' } })
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'jordan@example.test' } })
    fireEvent.change(screen.getByLabelText('Priority solution area'), { target: { value: 'Infrastructure' } })
    fireEvent.change(screen.getByLabelText('Current challenge'), { target: { value: 'Disconnected work information' } })
    fireEvent.click(screen.getByRole('button', { name: /Prepare consultation request/i }))
    expect(screen.getByRole('status')).toHaveTextContent('was not transmitted')
  })
})
