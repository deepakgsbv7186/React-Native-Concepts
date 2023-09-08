import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {moderateScale, moderateScaleVertical, textScale} from '../../../theme';
import ConfirmModal from './ConfirmModal';
import AddDataModal from './AddDataModal';
import EditDataModal from './EditDataModal';
import {getAPIdata, deleteAPIdata} from '../api/apiRequest';

export default function OperationApiRequest() {
  const [books, setBooks] = useState([]);
  // Modal Box
  const [isAddBookModalOpen, setIsAddBookModalOpen] = useState(false);
  const [isEditBookModalOpen, setIsEditBookModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // edit data
  const [selectedBook, setSelectedBook] = useState({});
  // delete data
  const [bookToDelete, setBookToDelete] = useState(null);

  // fetch data
  useEffect(() => {
    getBooks();
  }, [isAddBookModalOpen, isEditBookModalOpen]);

  const getBooks = async () => {
    try {
      const responseData = await getAPIdata();
      setBooks(responseData);
    } catch (error) {
      console.log('===== ', error);
    }
  };

  const editBookDetails = book => {
    setSelectedBook(book);
    setIsEditBookModalOpen(!isEditBookModalOpen);
  };

  const deleteBook = bookId => {
    setIsDeleteModalOpen(!isDeleteModalOpen);
    setBookToDelete(bookId);
  };

  const renderItem = ({item}) => (
    <View style={[styles.getDetailsContainer]}>
      <Text style={[styles.commonText]}>Title : {item.title}</Text>
      <Text style={[styles.commonText]}>Author : {item.author}</Text>
      <View style={[styles.actionbtn]}>
        <TouchableOpacity
          style={{flex: 0.5}}
          onPress={() => editBookDetails(item)}>
          <Text style={{textAlign: 'center', color: 'blue'}}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flex: 0.5}}
          onPress={() => deleteBook(item.id)}>
          <Text style={{textAlign: 'center', color: 'red'}}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <>
      <View style={[styles.container]}>
        {/* add new book button */}
        <TouchableOpacity
          onPress={() => setIsAddBookModalOpen(!isAddBookModalOpen)}
          style={[styles.newbookBtn]}>
          <Text style={[styles.commonText]}>+ New Book</Text>
        </TouchableOpacity>

        {/* List of books */}
        <View style={[styles.getContainer]}>
          {books?.length ? (
            <FlatList
              data={books}
              keyExtractor={item => item.id.toString()}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
            />
          ) : (
            <View style={[styles.getContainer]}>
              <Text style={[styles.commonText]}>No books found</Text>
            </View>
          )}
        </View>
      </View>
      {/* Add Book Modal */}
      <AddDataModal
        title={'New book details'}
        isOpen={isAddBookModalOpen}
        setIsOpen={setIsAddBookModalOpen}
      />
      {/* Edit Book Modal */}
      <EditDataModal
        title={'Edit book details'}
        isOpen={isEditBookModalOpen}
        setIsOpen={setIsEditBookModalOpen}
        bookData={selectedBook}
      />
      {/* Delete Book Modal */}
      <ConfirmModal
        isOpen={isDeleteModalOpen}
        title={'Confirm to delete'}
        onConfirm={async () => {
          if (bookToDelete) {
            await deleteAPIdata(bookToDelete);
            getBooks();
          }
          setBookToDelete(null); // Reset the bookToDelete state
          setIsDeleteModalOpen(!isDeleteModalOpen);
        }}
        onCancel={() => {
          setBookToDelete(null); // Reset the bookToDelete state
          setIsDeleteModalOpen(!isDeleteModalOpen);
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  actionbtn: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: moderateScale(10),
  },
  commonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: textScale(20),
  },
  getDetailsContainer: {
    backgroundColor: '#78C1F3',
    borderRadius: moderateScale(10),
    padding: moderateScaleVertical(10),
    marginVertical: moderateScaleVertical(4),
  },
  getContainer: {
    backgroundColor: '#7091F5',
    borderRadius: moderateScale(10),
    padding: moderateScale(10),
    rowGap: 10,
    marginBottom: moderateScaleVertical(70),
  },
  newbookBtn: {
    backgroundColor: '#7091F5',
    marginVertical: moderateScaleVertical(10),
    paddingVertical: moderateScale(10),
    borderRadius: moderateScale(10),
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: moderateScale(16),
  },
});
