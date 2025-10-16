# TodoApp - Functional Test Documentation

## Project Overview

**TodoApp** is a modern, feature-rich React-based todo application built with TypeScript, featuring PWA capabilities, task sharing, P2P synchronization, theme customization, and offline functionality.

**Live Demo:** https://react-cool-todo-app.netlify.app/

## Technology Stack

- **Frontend:** React 19.1.0, TypeScript, Vite
- **UI Framework:** Material-UI (MUI) 7.0.2, Emotion
- **PWA:** Vite PWA Plugin
- **State Management:** React Context API
- **Testing:** Vitest
- **Additional Features:** WebRTC (PeerJS), QR Code scanning, Drag & Drop

## Core Features & Test Areas

### 1. Task Management

#### 1.1 Task Creation

- **Test Case:** Create a new task with all fields
- **Steps:**

  1. Navigate to `/add` or click "Add Task" button
  2. Enter task name (required, max 40 characters)
  3. Enter description (optional, max 350 characters)
  4. Select emoji (optional)
  5. Choose color from color picker
  6. Set deadline (optional, datetime-local input)
  7. Assign categories (if enabled)
  8. Click "Create Task"

- **Expected Results:**
  - Task appears in home page
  - Task has unique UUID
  - All fields are preserved
  - Toast notification shows success
  - Form fields are cleared after creation

#### 1.2 Task Validation

- **Test Case:** Test input validation
- **Steps:**

  1. Try to create task with empty name
  2. Try to create task with name > 40 characters
  3. Try to create task with description > 350 characters

- **Expected Results:**
  - Empty name shows error toast
  - Long name/description shows character count and error
  - Create button is disabled for invalid inputs

#### 1.3 Task Completion

- **Test Case:** Mark task as done/undone
- **Steps:**

  1. Click on task checkbox/radio button
  2. Verify task appearance changes
  3. Check progress bar updates

- **Expected Results:**
  - Task shows checkmark emoji when done
  - Task text becomes strikethrough
  - Progress percentage updates
  - App badge count updates (if enabled)

#### 1.4 Task Editing

- **Test Case:** Edit existing task
- **Steps:**

  1. Click on task to open details
  2. Modify task properties
  3. Save changes

- **Expected Results:**
  - Changes are reflected immediately
  - Task maintains its position in list
  - Last save timestamp updates

#### 1.5 Task Deletion

- **Test Case:** Delete individual task
- **Steps:**

  1. Open task menu (right-click or menu button)
  2. Select delete option
  3. Confirm deletion

- **Expected Results:**
  - Task is removed from list
  - Progress bar updates
  - Toast notification confirms deletion

### 2. Task Organization

#### 2.1 Categories

- **Test Case:** Create and manage categories
- **Steps:**

  1. Navigate to `/categories`
  2. Create new category with name, emoji, color
  3. Assign category to tasks
  4. Edit category properties
  5. Delete category

- **Expected Results:**
  - Categories appear in category list
  - Tasks can be assigned to categories
  - Category completion percentage shows
  - Deletion removes category from all tasks

#### 2.2 Task Sorting

- **Test Case:** Test different sorting options
- **Steps:**

  1. Access settings
  2. Change sort option (dateCreated, dueDate, alphabetical, custom)
  3. Verify task order changes

- **Expected Results:**
  - Tasks reorder according to selected option
  - Custom sort allows drag-and-drop
  - Settings persist across sessions

#### 2.3 Task Pinning

- **Test Case:** Pin/unpin tasks
- **Steps:**

  1. Pin a task using task menu
  2. Verify pinned tasks appear at top
  3. Unpin task

- **Expected Results:**
  - Pinned tasks show pin icon
  - Pinned tasks stay at top regardless of sort
  - Pin status persists

### 3. User Interface & Experience

#### 3.1 Theme System

- **Test Case:** Test theme switching
- **Steps:**

  1. Access settings
  2. Switch between light/dark/system themes
  3. Change color themes
  4. Test glow effects

- **Expected Results:**
  - UI colors change immediately
  - Theme persists across sessions
  - System theme follows OS preference
  - Glow effects work when enabled

#### 3.2 Responsive Design

- **Test Case:** Test mobile responsiveness
- **Steps:**

  1. Test on mobile viewport
  2. Test on tablet viewport
  3. Test on desktop viewport

- **Expected Results:**
  - Layout adapts to screen size
  - Touch interactions work
  - Navigation is accessible
  - Text remains readable

#### 3.3 Progress Tracking

- **Test Case:** Test progress bar functionality
- **Steps:**

  1. Create multiple tasks
  2. Complete some tasks
  3. Verify progress calculation
  4. Hide/show progress bar

- **Expected Results:**
  - Progress percentage is accurate
  - Visual progress bar updates
  - Can be hidden/shown via settings
  - Shows completion messages

### 4. Task Sharing

#### 4.1 Share via Link

- **Test Case:** Share task via URL
- **Steps:**

  1. Open task details
  2. Click share button
  3. Copy generated link
  4. Open link in new browser/device

- **Expected Results:**
  - Link contains compressed task data
  - Task opens in share dialog
  - Can accept or decline shared task
  - Categories are included if present

#### 4.2 Share via QR Code

- **Test Case:** Share task via QR code
- **Steps:**

  1. Generate QR code for task
  2. Scan QR code with another device
  3. Verify task import

- **Expected Results:**
  - QR code generates correctly
  - Scanning opens share dialog
  - Task imports successfully
  - Works offline (if cached)

### 5. Data Synchronization

#### 5.1 P2P Sync (WebRTC)

- **Test Case:** Sync data between devices
- **Steps:**

  1. Navigate to `/sync`
  2. Choose "Display QR Code" on device 1
  3. Choose "Scan QR Code" on device 2
  4. Scan QR code
  5. Verify data sync

- **Expected Results:**
  - QR code displays peer ID
  - Connection establishes successfully
  - Tasks and categories sync
  - Settings sync based on selection
  - Sync status shows progress

#### 5.2 Import/Export

- **Test Case:** Export and import tasks
- **Steps:**

  1. Navigate to `/transfer`
  2. Select tasks to export
  3. Export to JSON file
  4. Import JSON file
  5. Verify data integrity

- **Expected Results:**
  - JSON file contains task data
  - Import preserves all properties
  - Categories are imported correctly
  - Validation prevents invalid imports
  - File size limits are enforced

### 6. Progressive Web App (PWA)

#### 6.1 Installation

- **Test Case:** Install PWA
- **Steps:**

  1. Open app in supported browser
  2. Click install prompt
  3. Verify installation

- **Expected Results:**
  - Install prompt appears
  - App installs successfully
  - App icon appears in app drawer
  - Splash screen shows on launch

#### 6.2 Offline Functionality

- **Test Case:** Test offline capabilities
- **Steps:**

  1. Disconnect internet
  2. Verify app still works
  3. Create/edit tasks offline
  4. Reconnect and verify sync

- **Expected Results:**
  - App works offline
  - Tasks can be created/edited
  - Data syncs when online
  - Offline indicator shows

#### 6.3 App Badge

- **Test Case:** Test app badge functionality
- **Steps:**

  1. Enable app badge in settings
  2. Create incomplete tasks
  3. Verify badge count
  4. Complete tasks and verify count updates

- **Expected Results:**
  - Badge shows incomplete task count
  - Updates when tasks completed
  - Can be disabled in settings
  - Works on supported platforms

### 7. Advanced Features

#### 7.1 AI Emoji Suggestions

- **Test Case:** Test AI emoji feature
- **Steps:**

  1. Open emoji picker
  2. Use AI suggestion feature (Chrome Canary required)
  3. Verify emoji suggestions

- **Expected Results:**
  - AI suggests relevant emojis
  - Works with Chrome Canary + Gemini Nano
  - Fallback to manual selection

#### 7.2 Read Aloud

- **Test Case:** Test text-to-speech
- **Steps:**

  1. Enable read aloud in settings
  2. Select voice and volume
  3. Use read aloud feature on tasks

- **Expected Results:**
  - Tasks are read aloud
  - Voice selection works
  - Volume control functions
  - Can be disabled

#### 7.3 Drag and Drop

- **Test Case:** Test task reordering
- **Steps:**

  1. Enable move mode
  2. Drag tasks to reorder
  3. Verify new order persists

- **Expected Results:**
  - Tasks can be dragged
  - Visual feedback during drag
  - Order saves automatically
  - Works with custom sort

### 8. Data Management

#### 8.1 Purge Tasks

- **Test Case:** Bulk delete tasks
- **Steps:**

  1. Navigate to `/purge`
  2. Select tasks to delete
  3. Use purge options (selected, done, all)
  4. Confirm deletion

- **Expected Results:**
  - Selected tasks are deleted
  - Confirmation dialog appears
  - Progress updates
  - Cannot be undone

#### 8.2 User Profile

- **Test Case:** Manage user profile
- **Steps:**

  1. Navigate to `/user`
  2. Change username
  3. Upload profile picture
  4. Test profile picture from URL

- **Expected Results:**
  - Username updates
  - Profile picture uploads
  - Image optimization works
  - Validation prevents invalid inputs

### 9. Error Handling

#### 9.1 Network Errors

- **Test Case:** Test offline/network error handling
- **Steps:**

  1. Simulate network errors
  2. Test sync failures
  3. Verify error messages

- **Expected Results:**
  - Appropriate error messages
  - Graceful degradation
  - Retry mechanisms work
  - User-friendly notifications

#### 9.2 Data Validation

- **Test Case:** Test data validation
- **Steps:**

  1. Try to import invalid JSON
  2. Test malformed URLs
  3. Test oversized files

- **Expected Results:**
  - Validation errors are shown
  - Invalid data is rejected
  - User guidance provided
  - App remains stable

### 10. Performance Testing

#### 10.1 Large Dataset

- **Test Case:** Test with many tasks
- **Steps:**

  1. Create 100+ tasks
  2. Test scrolling performance
  3. Test search/filter performance

- **Expected Results:**
  - Smooth scrolling
  - Fast search results
  - Responsive UI
  - Memory usage reasonable

#### 10.2 Memory Management

- **Test Case:** Test memory usage
- **Steps:**

  1. Monitor memory usage
  2. Test long sessions
  3. Test data cleanup

- **Expected Results:**
  - Memory usage stable
  - No memory leaks
  - Efficient data handling

## Test Environment Requirements

### Browser Support

- **Primary:** Chrome/Chromium (latest)
- **Secondary:** Firefox, Safari, Edge
- **Mobile:** iOS Safari, Chrome Mobile

### Device Testing

- **Desktop:** Windows, macOS, Linux
- **Mobile:** iOS, Android
- **Tablet:** iPad, Android tablets

### Network Conditions

- **Online:** Full connectivity
- **Offline:** No connectivity
- **Slow:** Limited bandwidth
- **Unstable:** Intermittent connectivity

## Test Data Requirements

### Sample Tasks

- Tasks with various lengths (short, medium, long)
- Tasks with special characters and emojis
- Tasks with URLs in descriptions
- Tasks with deadlines (past, present, future)
- Tasks with multiple categories

### Sample Categories

- Categories with different colors
- Categories with emojis
- Categories with special characters
- Empty categories
- Categories with many tasks

## Automation Considerations

### Critical Paths for Automation

1. Task creation and completion
2. Basic CRUD operations
3. Theme switching
4. Import/export functionality
5. PWA installation and offline mode

### Manual Testing Required

1. P2P synchronization
2. QR code scanning
3. Drag and drop interactions
4. Mobile-specific features
5. Cross-device compatibility

## Bug Reporting Template

### Issue Information

- **Title:** Brief description
- **Priority:** Critical/High/Medium/Low
- **Component:** Task Management/UI/Sharing/etc.
- **Browser:** Chrome 120/Firefox 119/etc.
- **Device:** iPhone 14/Windows 11/etc.

### Steps to Reproduce

1. Step 1
2. Step 2
3. Step 3

### Expected Result

What should happen

### Actual Result

What actually happened

### Additional Information

- Screenshots/videos
- Console errors
- Network logs
- User data (if relevant)

## Test Execution Schedule

### Phase 1: Core Functionality (Week 1)

- Task CRUD operations
- Basic UI functionality
- Theme system

### Phase 2: Advanced Features (Week 2)

- Sharing functionality
- P2P synchronization
- Import/export

### Phase 3: PWA & Mobile (Week 3)

- PWA installation
- Offline functionality
- Mobile responsiveness

### Phase 4: Integration & Performance (Week 4)

- Cross-browser testing
- Performance testing
- Edge case handling

## Success Criteria

### Functional Requirements

- All core features work as specified
- No critical bugs in main workflows
- Cross-browser compatibility maintained
- Mobile experience is smooth

### Performance Requirements

- App loads in < 3 seconds
- Smooth 60fps animations
- Responsive to user interactions
- Efficient memory usage

### Accessibility Requirements

- Keyboard navigation works
- Screen reader compatibility
- Color contrast compliance
- Touch target sizes appropriate

---

_This document should be updated as new features are added or requirements change._
